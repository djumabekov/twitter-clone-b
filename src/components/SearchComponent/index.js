import { SEARCH_IMG_PATH } from './images';

export default function SearchComponent({ searchTxt, onSearchTextInput }) {
  return (
    <div
      className="d-flex p-3 m-3"
      style={{
        height: 60,
        width: 360,
        border: '1px solid whitesmoke',
        borderRadius: 50,
        background: 'whitesmoke',
        fontSize: 18,
        outline: 'none',
      }}>
      {SEARCH_IMG_PATH}
      <input
        onChange={onSearchTextInput}
        value={searchTxt}
        placeholder="Search Twitter"
        style={{
          background: 'whitesmoke',
          border: 'none',
          outline: 'none',
        }}
        className="mx-3"
      />
    </div>
  );
}
