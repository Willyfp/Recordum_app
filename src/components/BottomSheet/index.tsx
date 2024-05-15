'use client';

import { MdClose } from 'react-icons/md';
import Sheet from 'react-modal-sheet';

type Props = {
  open?: boolean;
  title?: string;
  children?: React.ReactNode;
  closeAction: () => void;
  icon?: React.ReactNode;
};

const BottomSheet = ({ open, title, children, closeAction, icon }: Props) => {
  return (
    <Sheet isOpen={!!open} onClose={() => {}} detent='content-height'>
      <Sheet.Container style={{ borderRadius: '1.88rem 1.88rem 0rem 0rem' }}>
        <div className='p-[1.5rem]'>
          <Sheet.Header>
            <div className='w-full flex flex-col gap-[1rem] items-center'>
              <div className='flex w-full flex-row-reverse'>
                <MdClose
                  className='cursor-pointer text-black'
                  size='1.5rem'
                  onClick={closeAction}
                />
              </div>

              {icon}

              <span className='text-title font-title_bottom_sheet text-center text-black'>
                {title}
              </span>
            </div>
          </Sheet.Header>

          <Sheet.Content>{children}</Sheet.Content>
        </div>
      </Sheet.Container>
    </Sheet>
  );
};

export default BottomSheet;
