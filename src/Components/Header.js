import { Nav } from './Nav';

export const Header = () => {
  return (
    <header className="p-3 bg-light text-white">
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <h1 className="col-3 text-dark">Movie List</h1>
          <div className="col-9">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};
