const Card = ({ text }: { text: string }) => {
  return (
    <div className='bg-white py-2 px-4 rounded-sm max-w-[300px] shadow-md mb-3'>
      {text}
    </div>
  );
};

export default Card;
