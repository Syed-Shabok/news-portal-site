const loading = () => {
  return (
    <div className="h-[85vh] flex flex-col gap-5 items-center justify-center">
      <h1>Global Loading</h1>
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};

export default loading;
