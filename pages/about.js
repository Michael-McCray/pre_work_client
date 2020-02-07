import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import React, { Component } from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic";



const Page = dynamic(
  () => import("../components/about"),
  {
    ssr: false
  }
);

function About() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>about</h1>
    </Layout>
  )
} export default Page
