const {useEffect} = require("react");
const {useDispatch} = require("react-redux");

const useDispatchUnmount = (action) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      console.log('clear')
      dispatch(action());
    }
  }, []);
};

export default useDispatchUnmount;
