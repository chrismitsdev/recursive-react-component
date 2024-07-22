import * as React from 'react'
import {ChevronRight, Folder, File} from 'lucide-react'
import {type Node} from '../lib/data'

function FileSystemItem({node}: {node: Node}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <li key={node.name} className='my-1.5'>
      <span className='flex items-center gap-1.5'>
        {node.nodes && node.nodes.length > 0 && (
          <button onClick={() => setIsOpen(o => !o)}>
            <ChevronRight 
              size={16} 
              className={`text-gray-500 transition ${isOpen ? 'rotate-90' : ''}`} 
            />
          </button>
        )}
        {node.nodes 
          ? <Folder className={`text-sky-400 ${node.nodes.length === 0 ? 'ml-[22px]' : ''}`} /> 
          : <File className='ml-[22px] text-gray-700' />
        }
        {node.name}
      </span>

      {isOpen && node.nodes && node.nodes.length > 0 && (
        <ul className='pl-6'>
          {node.nodes?.map(node => (
            <FileSystemItem key={node.name} node={node} />
          ))}
        </ul>
      )}
    </li>
  )
}

FileSystemItem.displayName = 'FileSystemItem'

export {FileSystemItem}