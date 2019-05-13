import React, { Component } from 'react';
import Logo  from '../components/Logo';
import Table from 'react-bootstrap/Table';
import DetailModal from '../components/Modal'
import ReactPaginate from 'react-paginate';
import "../styles/Main.css"


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [],
            currentPage: 0,
            show: false,
            person : {
                name: "",
                height: "",
                mass: "",
                hair: "",
                skin: "",
                eye: "",
                year: "",
                gender: ""
            }
        }
    }


    fetchData = async (pageNum) => {
        await fetch(`https://swapi.co/api/people/?page=${pageNum}`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState({
                    data: data.results.map(person => {
                        return (
                            <tr onClick={() => this.handleRowClick(person.url)}>
                                <td>
                                    {person.name}
                                </td>
                            </tr>
                        )
                    })
                });
            });
    }

    handleClose = () => {
        this.setState({
            show:  false
        });
    }

    handleShow = () => {
        this.setState({
            show: true
        });
    }

    handlePageClick = (data) => {
        let pageNum = data.selected+1;
        this.fetchData(pageNum)
    }

    handleRowClick = async (url) => {
        await fetch(url)
        .then(results => {
            return results.json()
        })
        .then(data => {
            this.setState({
                person : {
                    name: data.name,
                    height: data.height,
                    mass: data.mass,
                    hair: data.hair_color,
                    skin: data.skin_color,
                    eye: data.eye_color,
                    year: data.birth_year,
                    gender: data.gender
                }
            })
        })
        .then(() => {
            this.handleShow()
        })
    }

    render() {

        return(
            <div>
                <Logo />
                <Table striped bordered hover variant="dark" className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data}
                    </tbody>
                </Table> 
                <ReactPaginate
                    pageCount={Math.ceil(87/10)}
                    marginPagesDisplayed={Math.ceil(87/10)}
                    pageRangeDisplayed={0}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    initialPage={this.state.currentPage}
                    previousLabel={'<'}
                    nextLabel={'>'}
                />
                <DetailModal profile={this.state.person} show={this.state.show} onHide={() => this.handleClose()} />
            </div>
            
        )
    }

}

export default Main;

