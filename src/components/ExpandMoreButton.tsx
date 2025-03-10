import { Chip } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

interface ExpandMoreButtonProps {
  label: string;
  expand: boolean;
  onClick: () => void;
}

const ExpandMoreButton: React.FC<ExpandMoreButtonProps> = ({
  label,
  expand,
  onClick,
}) => {
  return (
    <Chip
      deleteIcon={
        <ExpandCircleDownIcon
          sx={{ transform: expand ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      }
      onClick={onClick}
      onDelete={onClick}
      variant="outlined"
      color="primary"
      label={label}
    />
  );
};
export default ExpandMoreButton;
