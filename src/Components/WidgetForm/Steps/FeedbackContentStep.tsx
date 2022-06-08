import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { api } from '../../../services/api';
import { CloseButton } from '../../CloseButton';
import { Loading } from '../../Loading';
import { ScreenshotButton } from '../../ScreenshotButton';

type FeedbackContentStepProps = {
  feedbackType: FeedbackType;
  onFeedbackSent: () => void;
  onFeedbackRestartRequested: () => void;
};

export function FeedbackContentStep({
  feedbackType,
  onFeedbackSent,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const [comment, setComment] = useState<string>('');
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [sendingFeedback, setSendingFeedback] = useState<boolean>(false);
  
  const { title, image } = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setSendingFeedback(true);
    
    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot,
    });

    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type='button'
          onClick={onFeedbackRestartRequested}
          title='Escolher outro tipo de feedback'
          className='absolute top-5 left-5 text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none focus:ring-1 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-sm'
        >
          <ArrowLeft className='w-4 h-4' weight='bold' />
        </button>

        <span className='text-xl leading-6 flex items-center gap-2'>
          <img
            className='w-6 h-6'
            src={image.source}
            alt={image.alt}
          />
          {title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className='my-4 w-full'>
        <textarea
          placeholder='Conte o que está acontecendo...'
          onChange={(event) => setComment(event.target.value)}
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent overflow-hidden'
        />

        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotReady={setScreenshot}
          />

          <button
            type='submit'
            disabled={comment.length === 0 || sendingFeedback}
            className='p-2 rounded-md bg-brand-500 border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors focus-styles disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed'
          >
            {sendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}
