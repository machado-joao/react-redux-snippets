import Button from "../components/Button";
import { GoBell, GoCloudDownload } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div>
      <div>
        <Button primary onClick={handleClick}>
          <GoBell /> Notifications
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          <GoCloudDownload />
          Download
        </Button>
      </div>
      <div>
        <Button warning>Hide</Button>
      </div>
      <div>
        <Button secondary rounded>
          Open
        </Button>
      </div>
      <div>
        <Button danger outline>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
