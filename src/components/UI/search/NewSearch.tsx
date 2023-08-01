import React, { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface NewSearchType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (event: any) => void;
}

export default function NewSearch({ children, isOpen, toggle, type, placeholder, value, onChange }: NewSearchType) {
  return (
    <>
      {isOpen && (
        <div 
        	className="fixed inset-0 z-50 bg-black bg-opacity-50 flex flex-col items-start"
        	onClick={toggle}>
          <div 
          	className="relative py-2 rounded-sm bg-white w-full max-w-screen-lg"
          	onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col h-full">
          		<div className="flex justify-center items-center gap-8">
          			<div className="border border-black border-solid p-4 rounded-full text-sm w-1/2">
          				<FontAwesomeIcon icon={faMagnifyingGlass} />
	          			<input
			        			placeholder={placeholder}
			        			type={type}
			        			value={value}
			        			onChange={onChange}
			        			className="text-sm font-normal mx-2 placeholder:text-white w-4/5 border-none focus:outline-none" />
          			</div>
		        		<button
					        className="cursor-pointer"
					        onClick={toggle}>
									<FontAwesomeIcon className="text-2xl" icon={faXmark} />
				        </button>
          		</div>
          	</div>
          </div>
        </div>
      )}
    </>
  );
}
