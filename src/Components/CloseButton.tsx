import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button
      title='Fechar formulário de feedback'
      className='absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none focus:ring-1 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-sm'
    >
      <X className='w-4 h-4' weight='bold' />
    </Popover.Button>
  );
}
