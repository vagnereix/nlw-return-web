import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';
import { WidgetForm } from './WidgetForm';

export function Widget() {
  return (
    <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      {/* A classe *group* fala que tudo o que tiver dentro do elemento é um agrupamento de algo */}
      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center focus-styles group'>
        <ChatTeardropDots className='h-6 w-6' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500'>
          <span className='pl-2' />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
