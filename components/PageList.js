import React from 'react'

import allPageses from '../store/store'

const PageList = () => (
  <section>
    <ul>
      { allPageses.map(page =>
        <li key={ page.id }>
          <a>
            <img src={ page.image } alt='pages' />
            <p>{ page.description }</p>
          </a>
        </li>
      ) }
    </ul>
    <style jsx>{`
      ul {
        padding-left: 0px;
        list-style-type: none;
        margin-top: 10px;
      }
      ul img {
        width: 100%;
        height: auto;
        display: inline-block;
        margin: 0 20px 10px 0;
      }
      li {
        padding-right: 20px;
        border-left: none;
        border-right: none;
        display: inline-block;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
        color: #333;
        text-align: center;
        text-transform: uppercase;
      }
    `}</style>
  </section>
)

export default PageList
