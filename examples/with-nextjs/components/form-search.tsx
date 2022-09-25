export const FormSearch = () => {
  return (
    <form
      className={
        'focus-within:border-secondary hover:border-secondary flex items-center overflow-hidden rounded-full border'
      }
    >
      <input
        type="search"
        placeholder={'Search items, collections,....'}
        className={'py-1.75 w-full px-4 placeholder:text-sm placeholder:text-neutral-50 focus:outline-none'}
      />
      <button
        type={'submit'}
        className={'hover:bg-secondary-10 focus-visible:bg-secondary-10 mx-1 rounded-full p-1 focus:outline-none'}
      >
        <span className={'sr-only'}>Search</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.3851 15.4457C11.7348 17.5684 7.85538 17.4013 5.3986 14.9445C2.76256 12.3085 2.76256 8.03464 5.3986 5.3986C8.03464 2.76256 12.3085 2.76256 14.9445 5.3986C17.4013 7.85538 17.5684 11.7348 15.4457 14.3851L20.6014 19.5407C20.8943 19.8336 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8336 20.8943 19.5407 20.6014L14.3851 15.4457ZM6.45926 13.8839C4.40901 11.8336 4.40901 8.50951 6.45926 6.45926C8.50951 4.40901 11.8336 4.40901 13.8839 6.45926C15.9326 8.50801 15.9341 11.8287 13.8884 13.8794C13.8869 13.8809 13.8854 13.8823 13.8839 13.8839C13.8824 13.8854 13.8809 13.8869 13.8794 13.8884C11.8288 15.9341 8.50801 15.9326 6.45926 13.8839Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </form>
  );
};
