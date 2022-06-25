import React, {useState} from 'react'
import { Input, Button }  from 'components'

function Form({title, handleClick}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div>
      <Input type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <Input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
        />
        <Button
        onClick={() => handleClick(email, pass)}
        className="button--outline"
        >
          {title}
        </Button>
    </div>
  )
}

export default Form