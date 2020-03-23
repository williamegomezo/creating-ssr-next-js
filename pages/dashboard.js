import Cta from "components/cta";
import SearchBar from "components/searchBar";
import List from "components/list";
import axios from "axios";
import { connect } from "react-redux";

class Dashboard extends React.Component {
    static async getInitialProps(ctx) {
      const res = await axios.get("http://localhost:3000/mocks/heroes.json");
      const heroes = await res.data;
      console.log(res.data);
      return { heroes };
    }

    render() {
        return (
          <div>
              <Cta href="/heroes">Go to heroes list</Cta>
              <h1>Tour of Heroes</h1>
              <SearchBar placeholder="Search a hero" />
              <List array={this.filterHeroes()} />
          </div>
        );
    }

    filterHeroes() {
        const { heroes = [], search } = this.props;
        const pattern = search.toLowerCase();
        return heroes.filter(hero =>
          hero.toLowerCase().includes(pattern)
        );
    }
}

export default connect(state => state)(Dashboard);
