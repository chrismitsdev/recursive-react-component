import {nodes} from './lib/data'
import {FileSystemItem} from './components/file-system-item'

function App() {
  return (
    <div className='p-16 max-w-md mx-auto'>
      <ul>
        {nodes.map(node => (
          <FileSystemItem key={node.name} node={node} />
        ))}
      </ul>
    </div>
  )
}

App.displayName = 'App'

export {App}