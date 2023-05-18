import NoImage from '../assets/images/no-image.png'
export const getCroppedImageUrl = (url: string): string => {
   if(url)
  { 
    const target='media/'
     const index=url.indexOf(target)+target.length
     return url.slice(0,index)+'crop/600/400/'+url.slice(index)
   }
   else {
      return NoImage
   }}
   