const productModel=require('../Models/Product');

exports.singleFileUpload=async(req,res,next)=>{
    try{
          //const file=req.file;
          const file={
              fileName:req.file.originalname,
              filePath:req.file.path,
              fileType:req.file.mimetype,
              fileSize: this.fileSizeFormatter(req.file.size,2) //req.file.size
          }
          console.log(file);
          res.status(201).send("file uploaded sucessfully");

    }catch(error)
    {
        res.status(400).send(error.message);

    }
}

exports.fileSizeFormatter=(bytes,decimal)=>{
    if(bytes===0)
    {
        return '0 Bytes';
    }
    const dm=decimal || 2;
    const sizes=['Bytes','KB','MB','GB','PB','TB','YB','ZB'];
    const index=Math.floor(Math.log(bytes)/Math.log(1000));
    return parseFloat((bytes/Math.pow(1000,index)).toFixed(dm))+' '+sizes[index];
}
//<img src=`http://localhost:8080/${file.filePath}`
exports.insertProduct=async(req,res)=>{
        console.log("product insert :",req.body,req.file);
        const body={
            pname:req.body.pname,
            desc:req.body.desc,
            price:req.body.price,
            ptype:req.body.ptype,
            img:req.file.path
        }
       //console.log(req.file);
            
            
       
    try{
         const product=new productModel(body);
         const result=await product.save();
         if(!result)
            return res.status(200).json({'inserted':false})
         else 
           return  res.status(201).json({'inserted':true});
       } 
    catch(error)
       {
         console.log(error);
         return  res.status(500).json({'inserted':false});
       }
  }
  