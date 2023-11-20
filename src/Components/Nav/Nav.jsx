import React from 'react'
import './Nav.css'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
  } from '@chakra-ui/react'

const Nav = () => {
  return (
    <div className='nav-container'>
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Productos</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Detalles</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
  )
}

export default Nav