const SingleProductParameters = ({ parameterName, parameter }: { parameterName: string, parameter: string }) => {
  return <div className="parameters">
    <span>{parameterName}</span>
    <p>{parameter}</p>
  </div>
}
export default SingleProductParameters