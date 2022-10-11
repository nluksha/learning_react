import React from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="products">Products</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  )
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  )
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  )
}

export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  )
}

export function Whoops404() {
  const location = useLocation();

  return (
    <div>
      <h1>Resource not found af {location.pathname}</h1>
    </div>
  )
}

export function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <p>
        ...
      </p>
    </section>
  )
}

export function History() {
  return (
    <section>
      <h2>Our History</h2>
      <p>
        ...
      </p>
    </section>
  )
}

export function Location() {
  return (
    <section>
      <h2>Our Location</h2>
      <p>
        ...
      </p>
    </section>
  )
}
