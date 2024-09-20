const SingleProductDescription = ({ desc }: { desc: string }) => {
  return <div>
    <div className="description">
      <h2>Description</h2>
    </div>
    <p>{desc}</p>
  </div>
}
export default SingleProductDescription