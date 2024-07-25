import { useState } from 'react';
import { DndContext, KeyboardSensor, MouseSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from '../components/SortableItem';
import MainHeading from '../components/MainHeading';

const DragAndDrop = () => {

  const [items, setItems] = useState(
    [
      {
        id: '1',
        title: 'Interview preparation with JavaScript 2.0',
        price: 'Rs. 9000/-',
        type: 'Course',
        imagePath: '/src/assets/images/bundleImages/bundle1.png'
      },
      {
        id: '2',
        title: 'Aptitude - Averages, Mixtures & Allegation',
        price: 'Free',
        type: 'Mock Test',
        imagePath: '/src/assets/images/bundleImages/bundle2.png'
      },
      {
        id: '3',
        title: 'Aptitude - Simple & Compound Interest',
        price: 'Free',
        type: 'Mock Test',
        imagePath: '/src/assets/images/bundleImages/bundle3.png'
      },
      {
        id: '4',
        title: 'Aptitude - Partnership',
        price: 'Free',
        type: 'Mock Test',
        imagePath: '/src/assets/images/bundleImages/bundle4.png'
      },
      {
        id: '5',
        title: 'Aptitude - Time & Work',
        price: 'Free',
        type: 'Mock Test',
        imagePath: '/src/assets/images/bundleImages/bundle4.png'
      },
    ]
  )

  const handleMoveUp = (id) => {
    let index = items.findIndex(item => item.id === id);
    if (index > 0) {
      setItems((items) => arrayMove(items, index, 0));
    }
  };

  const handleMoveDown = (id) => {
    let index = items.findIndex(item => item.id === id);
    if (index < items.length - 1) {
      setItems((items) => arrayMove(items, index, items.length - 1));
    }
  };

  const handleItemRemove = (id) => {
    setItems(items.filter(item => !(item.id === id)))
  };

  const handleDragEnd = (event) => {
    console.log('handleDragEnd')
    const { active, over } = event;

    console.log(active.id, over.id)

    if (active.id != over.id) {
      setItems((items) => {
        const activeIndex = items.findIndex(item => item.id === active.id);
        const overIndex = items.findIndex(item => item.id === over.id);
        return arrayMove(items, activeIndex, overIndex)
      })
    }
  }

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  });

  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, keyboardSensor);

  return (
    <div className="bg-[#D2E3C8] w-[100%] min-h-[100vh]">
      <MainHeading text={'Chai aur Code'} color={'#4F6F52'}></MainHeading>
      <div className="flex pb-10">

        <div className="flex justify-center mt-6 w-full">
          <div className="p-6 bg-[#F9F7F7] border-[F9F7F7] rounded-xl shadow w-[90%]">
            <div className="">
              <h1 className='text-4xl font-bold text-left'>{'Manage Bundle'}</h1>
              <p className='text-xl text-[#4B4747] text-left mt-2'>{'Change orders of the products based on priority'}</p>
            </div>
            <div className="">
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                sensors={sensors}
              >
                <SortableContext
                  items={items}
                  strategy={verticalListSortingStrategy}
                >
                  {items.map((item) => <SortableItem
                    key={item.id}
                    item={item}
                    onMoveUp={() => handleMoveUp(item.id)}
                    onMoveDown={() => handleMoveDown(item.id)}
                    onItemRemove={() => handleItemRemove(item.id)}
                  />)}
                </SortableContext>
              </DndContext>
            </div>

          </div>
        </div>

        <div className="mr-6 flex">
          <div className="flex flex-col-reverse">
            <a href="https://chaicode.com/" target="_blank" className="">
              <img className="h-[115px] w-[115px] rounded-lg" src="/src/assets/images/cac_logo_square.png" alt="" />
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DragAndDrop;
