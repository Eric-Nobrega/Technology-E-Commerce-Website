import { Stack, Alert, AlertIcon } from "@chakra-ui/react";
import Error from "../Assets/Error.svg";

export const ErrorPage = () => {
  return (
    <div className="h-screen">
      <div>
        <Stack spacing={3}>
          <Alert status="error">
            <AlertIcon />
            There was an error processing your request
          </Alert>
        </Stack>
      </div>
      <div className="flex justify-center mt-20">
        <img src={Error} alt="" className="w-1/4" />
      </div>
    </div>
  );
};
