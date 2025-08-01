

const Container = ({ className, children }) => {
  return (
    <section
      className={`container sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto lg:py-20 md:py-12 py-8 sm:px-0 px-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
