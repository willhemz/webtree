import React from 'react'
import { data } from './data'
import {AiOutlineGithub} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Header from './Header'

const Main = () => {
  return <>
    <Header />
    <main className='row mx-0 my-3'>
        <section className="col-10 my-0 mx-auto list-group">
            {
                data.map((item, index) => {
                    const {name, url, id, title} = item
                    return <>
                        <a className='border-0 text-center fw-normal fs-6 rounded-3 p-3 list-group-item list-group-item-secondary list-group-item-action my-2' id={id} key={id} title={title} href={url}>{name}</a>    
                    </>
                })
            }
            <Link id='contact' key={new Date().getTime().toString()} to='/contact' className='border-0 text-center fw-normal fs-6 rounded-3 p-3 list-group-item list-group-item-secondary list-group-item-action my-2'>Contact Me</Link>
        </section>
        <section className="col-10 my-3 fs-4 mx-auto text-center">
            <img src="./image/slack.svg" alt="slack" className='col-1 me-3' style={{width:'1.6rem'}} />
            <a href="https://github.com/willhemz/webtree">
                <AiOutlineGithub className='text-dark' style={{fontSize:'2rem'}} />
            </a>
        </section>
    </main>
  </>
}

export default Main
