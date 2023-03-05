type EmptyScreenProps = {
  message: string;
};

export const EmptyScreen = ({ message }: EmptyScreenProps) => {
  return (
    <div className="empty-screen">
      <h2>{message}</h2>
    </div>
  );
};
