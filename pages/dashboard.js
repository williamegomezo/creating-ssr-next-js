import Cta from "components/cta";
import SearchBar from "components/searchBar";
import List from "components/list";
import axios from "axios";

function Dashboard(props) {
  const { heroes } = props;

  return (
    <div>
      <Cta href="/heroes">Go to heroes list</Cta>
      <h1>Tour of Heroes</h1>
      <SearchBar placeholder="Search a hero" />
      <List array={heroes} />
    </div>
  );
}

Dashboard.getInitialProps = async () => {
  const res = await axios.get("http://localhost:3000/mocks/heroes.json");
  const heroes = await res.data;
  return { heroes };
};

export default Dashboard;
