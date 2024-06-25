import DirectoryItem from "../directory-item/directory-item.component";
import {DirectoryContainer} from './directory.styles.jsx'

const categories = [
  {
    id: 1,
    title: "cooking",
    imageUrl: "https://as2.ftcdn.net/v2/jpg/03/32/75/39/1000_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg",
    route: 'shop/cooking'
    
  },
  {
    id: 2,
    title: "national parks",
    imageUrl: "https://cdn.outsideonline.com/wp-content/uploads/2021/04/13/arches-best-time-visit_h.jpg?width=800",
    route: 'shop/national%20parks'
  },
  {
    id: 3,
    title: "sailing",
    imageUrl: "https://images.pexels.com/photos/1586804/pexels-photo-1586804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: 'shop/sailing'
  },
  {
    id: 4,
    title: "soccer",
    imageUrl: "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: 'shop/soccer'
  },
  {
    id: 5,
    title: "traveling",
    imageUrl: "https://tailoredspain.com/wp-content/uploads/2015/03/traveling.png",
    route: 'shop/traveling'
  }
]

const Directory = () => {
  
  return (

    <DirectoryContainer>
      {categories.map(category => {
        return (
          <DirectoryItem key={category.id} category={category}/>
        )
      })}
    </DirectoryContainer>

  )
}

export default Directory;