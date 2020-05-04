import React from 'react';
import api from './api'
import { CardInfo, NavApp } from './components/index'



class App extends React.Component {

  state = {
    globalData: []
  }

  componentDidMount() { this.getGlobalStats() }

  getGlobalStats = async () => {
    await api.get('free-api?global=stats')
      .then((response) => {
        const globalData = response.data.results.map(item => ({
          active_cases: item.total_active_cases,
          affected_countries: item.total_affected_countries,
          cases: item.total_cases,
          deaths: item.total_deaths,
          new_deaths_today: item.total_new_deaths_today,
          recovered: item.total_recovered,
          serious_cases: item.total_serious_cases,
          unresolved: item.total_unresolved,
          source: item.source.url
        }))
        this.setState({ globalData: globalData[0] })
        console.log(globalData[0])
      }).catch((error) => {
        console.log("ERRO", error)
      })
  }



  render() {
    const { globalData } = this.state

    return (
      <div>
        <NavApp />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <CardInfo titulo='Total de Casos' content={globalData.cases} />
          <CardInfo titulo='Mortes' content={globalData.deaths} />
          <CardInfo titulo='Recuperados' content={globalData.recovered} />
        </div>
        {/* <DrawerApp/> */}
      </div>
    )
  }
}

export default App;
