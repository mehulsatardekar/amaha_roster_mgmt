import { viewModeList } from "@/src/constants/viewMode";
import CalenderView from "@/src/containers/CalenderView/CalenderView";
import Home from "@/src/containers/Home/Home";
import HomeShell from "@/src/containers/Home/HomeShell";
import {
  useFetchUsersQuery,
  useFetchUsersSlotsAndEventsQuery,
} from "@/src/store/slices/apiSlice";
import { RootState } from "@/src/store/store";
import { useSelector } from "react-redux";

export default function Index() {
  const {
    data: fetchUsers,
    isLoading: isUsersLoading,
    error: usersError,
  } = useFetchUsersQuery(undefined);
  const {
    data: fetchUsersSlotsAndEvents,
    isLoading: isSlotsLoading,
    error: slotsError,
  } = useFetchUsersSlotsAndEventsQuery(undefined);

  const viewMode = useSelector((state: RootState) => state.viewMode.viewMode);

  const isLoading = isUsersLoading || isSlotsLoading;
  const error = usersError || slotsError;

  const errorMessage = error
    ? "status" in error
      ? `Error: ${error.status}` // FetchBaseQueryError
      : error.message || "An unknown error occurred" // SerializedError
    : null;
  return (
    <>
      {isLoading ? (
        <HomeShell />
      ) : error ? (
        <div className="text-red-500 p-4">Error: {errorMessage}</div>
      ) : viewMode === viewModeList.NORMAL ? (
        <Home
          state={{
            headingDetails: fetchUsers?.headingDetails || {},
            bookingSlotsInfo: fetchUsers?.bookingSlotsInfo || {},
            users: fetchUsers?.users || [],
          }}
        />
      ) : (
        <CalenderView
          state={{ dates: fetchUsersSlotsAndEvents?.dates || [] }}
        />
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  return { props: {} };
};
