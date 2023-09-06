// import './boxcomp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'; // Import the edit icon
// import './boxcomp.css'

const ProjectComponent = (props) => {
    const {data} = props
    const {project, industry_domains,funnel_stages, project_role , project_type} = data 
    return (
        <div className="w-full min-w-[250px] max-w-[300px] h-full min-h-[150px] max-h-[200px] flex flex-col justify-between bg-gradient-to-r from-teal-400 to-blue-500 m-4 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold text-white">{project}</h1>
                <div className="flex items-center ml-auto">
                    <a className="text-white text-sm underline hover:no-underline">
                    Edit Project
                    </a>
                    <FontAwesomeIcon
                    icon={faEdit}
                    className="text-white text-xl sdk-project-edit ml-2"
                    />
                </div>
            </div>
            <div className="mb-2">
                <h1 className="text-xs text-blue-200">Industry Domain:</h1>
                <h1 className="text-sm text-white">{industry_domains}</h1>
            </div>
            <div className="mb-2">
                <h1 className="text-xs text-blue-200">Funnel Stages:</h1>
                <h1 className="text-sm text-white">{funnel_stages}</h1>
            </div>
            <div className="flex justify-between">
                <h1 className="text-md font-semibold text-white">{project_role}</h1>
                <h1 className="text-md font-semibold text-white">{project_type}</h1>
            </div>
        </div>

    )
}

export default ProjectComponent