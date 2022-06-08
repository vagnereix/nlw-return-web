import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
};

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>
        <CloseButton />
      </header>

      {/**
       * Object.entries({ BUG: {...}, IDEA: {...}, OTHER: {...} }) =>
       * [
       *   [key: 'BUG', value: {...}],
       *   [key: 'IDEA', value: {...}],
       *   [key: 'OTHER', value: {...}],
       * ],
       */}
      <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            className='w-24 flex flex-1 flex-col items-center justify-center bg-zinc-800 py-5 rounded-lg gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
