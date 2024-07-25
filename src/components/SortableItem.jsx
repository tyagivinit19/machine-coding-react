import PropTypes from 'prop-types';

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { MdDragIndicator } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

import { useEffect, useRef, useState } from 'react';


const SortableItem = ({ item, onMoveUp, onMoveDown, onItemRemove }) => {

    const [showMenu, setShowMenu] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        if (showMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu]);



    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id, })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} className='p-4 m-4 bg-[#F9F7F7] border-[F9F7F7] rounded-xl shadow-[0_0px_8px_rgba(0,0,0,0.25)]' style={style} {...attributes} {...listeners}>
            <div className="flex justify-between">

                <div className="flex w-[75%]">
                    <div className="flex flex-col justify-center">
                        <MdDragIndicator className='text-4xl text-[#7F7F7F]' />
                    </div>
                    <img className="h-[75px] w-[133px] rounded-md ml-3" src={"/src/assets/images/bundleImages/bundle" + item.id + ".png"} alt="" />
                    <div className="flex flex-col justify-center ml-5 font-medium text-xl">
                        {item.title}
                    </div>
                </div>

                <div className="flex flex-row w-[25%]">
                    <div className="flex flex-col justify-center w-[45%]">
                        {item.price}
                    </div>
                    <div className="flex flex-col justify-center w-auto">
                        <div className="bg-[#DBFFCE]">{item.type}</div>

                    </div>

                    <div className="flex flex-col justify-center w-[10%] ml-auto">
                        <SlOptionsVertical onClick={() => { setShowMenu(!showMenu) }} />
                        {showMenu && (
                            <div ref={menuRef} className="absolute mt-8 ml-5 bg-white shadow-md rounded-md p-2 z-10">
                                <button onClick={() => {
                                    setShowMenu(false)
                                    onMoveUp()
                                }} className="block px-2 py-2 w-full text-sm text-gray-700 hover:bg-gray-200 text-left">
                                    <FaArrowUp className="inline mr-1" />
                                    Move To Top
                                </button>
                                <button onClick={() => {
                                    setShowMenu(false)
                                    onMoveDown()
                                }} className="block px-2 py-2 w-full text-sm text-gray-700 hover:bg-gray-200 text-left">
                                    <FaArrowDown className="inline mr-1" />
                                    Move To Bottom
                                </button>
                                <button onClick={() => {
                                    setShowMenu(false)
                                    onItemRemove()
                                }} className="block px-2 py-2 w-full text-sm hover:bg-gray-200 text-left text-[#FA2D2D]">
                                    <RiDeleteBinLine className="inline mr-1" />
                                    Remove
                                </button>

                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

SortableItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
    }).isRequired,

    onMoveUp: PropTypes.func.isRequired,
    onMoveDown: PropTypes.func.isRequired,
    onItemRemove: PropTypes.func.isRequired,
};

export default SortableItem