import { ImSpinner6 } from "react-icons/im";
import "./loading.css";

function Loading({ loading }) {
  return (
    <>
      {loading && (
        <div className="loading__container">
          <ImSpinner6 className="spnner" />
        </div>
      )}
    </>
  );
}

export default Loading;
