import React, { useState } from 'react';
import ToDolists from './ToDolists';
const App = () => {
    const [Item, newItem] = useState('');
    const [Items, setItems] = useState([]);
    const items = (event) => {
        newItem(event.target.value);
    }
    const listofItems = () => {
        if (Item.trim() !== '') {
            setItems((oldItems) => {
                return [...oldItems, Item]
            })
            newItem("");
        }


    }
    const deleteitems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrele, index) => {
                return index !== id;
            })
        })
    }
    return (

        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1>ToDo List</h1>
                    <input type='text' placeholder='Add item' value={Item} onChange={items} />
                    <button onClick={listofItems}>+</button>
                    <ol>

                        {Items.map((itemval, index) => {
                            return <ToDolists
                                text={itemval}
                                key={index}
                                id={index}
                                onSelect={deleteitems} />
                        })}
                    </ol>
                </div>

            </div>
            {/* <!-- Footer --> */}
            <section id="footer">
                <div class="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="https://github.com/ShuaibAlam12"><i className="fa fa-github"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/mohd-shuaib-alam-9820ba1b1/"><i className="fa fa-linkedin"></i></a></li>
                                <li className="list-inline-item"><a href="https://leetcode.com/Mohd_Shuaib_Alam/"><iconify-icon icon="simple-icons:leetcode" width="23" height="23"></iconify-icon></a></li>
                                <li className="list-inline-item"><a href="mailto:mohdshuaib.asahi@gmail.com" target="_blank"><i className="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p style={{color:'black'}}> Crafted with creativity and powered by ReactJS 🚀 - Turning thoughts into tasks, one line of code at a time. Embrace productivity with this dynamic ToDo List app I've brought to life!</p>
                            <p style={{color:'black'}}className="h6">&copy All right Reversed.<a className="text-green ml-2" href="https://github.com/ShuaibAlam12/shuaibalam1" target="_blank"><u>Shuaib Alam❤️</u></a></p>
                        </div>
                        <hr />
                    </div>
                </div >
            </section >
            {/* < !-- ./ Footer-- > */}
        </>
    )
}
export default App;