'use client'

import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Plumbing Services',
      description: 'Faucet repairs, pipe installations, water heater services, drain cleaning, and complete bathroom plumbing solutions.',
      icon: 'fa fa-wrench'
    },
    {
      title: 'Electrical Work',
      description: 'Outlet installations, lighting fixtures, panel upgrades, ceiling fan installations, and electrical safety inspections.',
      icon: 'fa fa-bolt'
    },
    {
      title: 'Painting',
      description: 'Interior and exterior painting, cabinet refinishing, wallpaper removal, and color consultation services.',
      icon: 'fa fa-paint-brush'
    },
    {
      title: 'Carpentry',
      description: 'Custom shelving, deck repairs, door installations, trim work, and furniture assembly services.',
      icon: 'fa fa-hammer'
    },
    {
      title: 'Drywall Repair',
      description: 'Hole patching, texture matching, crack repairs, and complete drywall installation services.',
      icon: 'fa fa-wall'
    },
    {
      title: 'General Maintenance',
      description: 'Gutter cleaning, pressure washing, fence repairs, tile installations, and seasonal maintenance.',
      icon: 'fa fa-tools'
    }
  ]

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Home Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Professional handyman services for all your residential needs. Licensed, insured, and guaranteed satisfaction.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-xl">
                  <i className={service.icon}></i>
                </div>
                <div className="mt-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Request Service
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Free estimates on all projects. Emergency services available.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services