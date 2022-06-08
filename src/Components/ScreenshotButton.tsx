import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from './Loading';

type ScreenshotButtonProps = {
  screenshot: string | null;
  onScreenshotReady: (screenshot: string | null) => void;
};

export function ScreenshotButton({
  screenshot,
  onScreenshotReady,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotReady(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type='button'
        onClick={() => onScreenshotReady(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 transition-colors hover:text-zinc-100 focus-styles'
      >
        <Trash weight='fill' />
      </button>
    );
  }

  return (
    <button
      type='button'
      title='Tirar foto da tela'
      onClick={handleTakeScreenshot}
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus-styles'
    >
      {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
    </button>
  );
}
