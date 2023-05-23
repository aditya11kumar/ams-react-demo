export default function Input(props) {

    const {  name, value, onChange, type,className } = props;
  
  
  
    return (
  
      <div>
  
        <input name={name}  type={type} value={value} onChange={onChange} className={className}/>
  
      </div>
  
    );
  
  }