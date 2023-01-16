import { Button } from "@mui/material";

interface Props {
  buttonName: string;
  handleClick: () => void;
}

const SecondaryButton = ({ buttonName, handleClick }: Props) => {
  return (
    <Button variant="outlined" color="error" onClick={handleClick}>
      {buttonName}
    </Button>
  );
};

export { SecondaryButton };
