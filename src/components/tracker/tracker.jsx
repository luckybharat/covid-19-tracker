import React from 'react'
import axios from 'axios'
import { TreeTable } from 'primereact/treetable'
import { Column } from 'primereact/column'
import { Row } from 'primereact/row'
import Highmap from '../highmaps/Highmapdemo'
import './tracker.css'
import { connect } from 'react-redux'
import { retriveData } from '../../redux/actions/postActions'
class Tracker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expandedKeys: {},
      mapData: [],
      totalActive: 0,
      totalConfirmed: 0,
      totalRecovered: 0,
      totalDeceased: 0,
      colorList: [],
      max: 0,
      filteredMapData: []
    }
  }

  async getDataFromUrl () {
    await this.props.retriveData()
    return this.props.nodes
  }

  componentDidMount () {
    this.getTreeTableData()
  }

  setMapData () {
    console.log(this.props.mapData)
    let data = []
    this.state.mapData.forEach(function (mapDataItem) {
      let stateCode = 'in-' + mapDataItem.stateCode.toLowerCase()
      // let item = [stateCode] = mapDataItem.stateActive;
      data.push({
        [stateCode]: mapDataItem.stateActive
      })
    })
    this.setState({
      mapData: data
    })
  }
  async getTreeTableData () {
    //console.log(this.props.nodes)
    let dataArray = []
    let mapData = []
    let totalActive = 0,
      totalDeceased = 0,
      totalRecovered = 0,
      totalConfirmed = 0
    await this.getDataFromUrl().then(data => {
      Object.keys(data).forEach(function (key) {
        //console.log(key);
        let stateKey
        dataArray.length == 0 ? (stateKey = 0) : (stateKey = dataArray.length)
        let stateName = key
        let stateCode = data[key].statecode
        let stateConfirm = 0
        let stateActive = 0
        let stateDeceased = 0
        let stateRecovered = 0
        let stateChildren = []
        Object.keys(data[key].districtData).forEach(function (item) {
          stateConfirm = data[key].districtData[item].confirmed + stateConfirm

          stateActive = data[key].districtData[item].active + stateActive
          stateDeceased = data[key].districtData[item].deceased + stateDeceased
          stateRecovered =
            data[key].districtData[item].recovered + stateRecovered
          let childrenKey
          childrenKey =
            stateChildren.length == 0 ? '0' : stateChildren.length.toString()
          stateChildren.push({
            data: {
              name: item,
              active: data[key].districtData[item].active,
              confirmed: data[key].districtData[item].confirmed,
              recovered: data[key].districtData[item].recovered,
              deceased: data[key].districtData[item].deceased
            },
            key: stateKey + '-' + childrenKey
          })
        })
        mapData.push({
          stateCode: stateCode,
          stateActive: stateActive,
          stateConfirm: stateConfirm,
          stateRecovered: stateRecovered,
          stateDeceased: stateDeceased
        })
        totalConfirmed = totalConfirmed + stateConfirm
        totalActive = totalActive + stateActive
        totalDeceased = totalDeceased + stateDeceased
        totalRecovered = totalRecovered + stateRecovered
        dataArray.push({
          key: stateKey,
          data: {
            name: stateName,
            active: stateActive,
            confirmed: stateConfirm,
            recovered: stateRecovered,
            deceased: stateDeceased,
            statecode: stateCode
          },
          children: stateChildren
        })
      })
    })
    let filteredMapData = []
    mapData.forEach(item => {
      let stateCode = 'in-' + item.stateCode.toLowerCase()
      let stConfirmInfo = item.stateConfirm
      let data = [stateCode, stConfirmInfo]
      filteredMapData.push({
        'hc-key': stateCode,
        value: stConfirmInfo
      })
    })
    console.log(dataArray)
    console.log(mapData)
    let max = totalConfirmed.toString().replace(',', '')
    this.setState({
      nodes: dataArray,
      mapData: mapData,
      colorList: [
        [0, '#FFFFFF'],
        [totalConfirmed / 2, '#FF7446'],
        [totalConfirmed, '#FF0000']
      ],
      totalActive: this.numberWithCommas(totalActive),
      totalConfirmed: this.numberWithCommas(totalConfirmed),
      totalDeceased: this.numberWithCommas(totalDeceased),
      totalRecovered: this.numberWithCommas(totalRecovered),
      max: parseInt(max),
      filteredMapData: filteredMapData
    })
    this.setMapData()
  }

  numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  updateExpandKey = event => {
    console.log(event.value)
    this.setState({
      expandedKeys: event.value
    })
  }

  render () {
    // let columns = this.state.nodes.map((col, i) => {
    //   return <Row key={col.key} field={col.key} />
    // })
    console.log(this.props.nodes)
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <div>
              {this.state.filteredMapData.length ? (
                <Highmap
                  stateInfo={this.state.filteredMapData}
                  max={this.state.totalConfirmed}
                  colors={this.state.colorList}
                ></Highmap>
              ) : (
                'null'
              )}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='d-flex'>
              <TreeTable
                value={this.state.nodes}
                expandedKeys={this.state.expandedKeys}
                onRowClick={e => this.setState({ expandedKeys: e.value })}
                onSelect={e => this.setState({ expandedKeys: e.value })}
                onToggle={e => this.setState({ expandedKeys: e.value })}
                style={{ marginTop: '.5em' }}
              >
                <Column
                  field='name'
                  header='State'
                  key='key'
                  value='key'
                  expander
                  sortable
                ></Column>
                <Column
                  field='confirmed'
                  header='Confirmed'
                  sortable
                  className='text-right'
                ></Column>
                <Column
                  field='active'
                  header='Active'
                  sortable
                  className='text-right'
                ></Column>
                <Column
                  field='recovered'
                  header='Recovered'
                  sortable
                  className='text-right'
                ></Column>
                <Column
                  field='deceased'
                  header='Deceased'
                  sortable
                  className='text-right'
                ></Column>
              </TreeTable>
              <div className='ml-auto mr-auto'>
                <ul className='cases-list'>
                  <li className='pt-3 pb-3'>
                    <div className='text-center'>
                      <div className='list-link'>Confirmed</div>
                      <div className='link-data'>
                        {this.state.totalConfirmed}
                      </div>
                    </div>
                  </li>
                  <li className='pt-3 pb-3'>
                    <div className='text-center'>
                      <div className='list-link'>Active</div>
                      <div className='link-data'>{this.state.totalActive}</div>
                    </div>
                  </li>
                  <li className='pt-3 pb-3'>
                    <div className='text-center'>
                      <div className='list-link'>Recovered</div>
                      <div className='link-data'>
                        {this.state.totalRecovered}
                      </div>
                    </div>
                  </li>
                  <li className='pt-3 pb-3'>
                    <div className='text-center'>
                      <div className='list-link'>Deceased</div>
                      <div className='link-data'>
                        {this.state.totalDeceased}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  loading: state.post.loading,
  hasError: state.post.hasError,
  posts: state.post.posts,
  nodes: state.post.posts
})

const mapDispatchToProps = dispatch => {
  return {
    retriveData: data => dispatch(retriveData(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tracker)
