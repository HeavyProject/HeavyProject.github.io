"use strict";(self.webpackChunkheavy=self.webpackChunkheavy||[]).push([[1298],{990:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Introduction",p={unversionedId:"API",id:"API",title:"Introduction",description:"In order to use this library properly, you need to learn about the interface and containers of Heavy. The library is implemented in C++ and has bindings for other languages. In order to provide a united interface (more or less) across multiple languages, some structures are used in the library. They will be explored in subsequent sections.",source:"@site/docs/API.md",sourceDirName:".",slug:"/API",permalink:"/docs/API",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/docs/intro"},next:{title:"Cart",permalink:"/docs/Classification/Cart"}},d={},c=[],l={toc:c};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In order to use this library properly, you need to learn about the interface and containers of ",(0,r.kt)("inlineCode",{parentName:"p"},"Heavy"),". The library is implemented in C++ and has bindings for other languages. In order to provide a united interface (more or less) across multiple languages, some structures are used in the library. They will be explored in subsequent sections."),(0,r.kt)("h1",{id:"data-type"},"Data Type"),(0,r.kt)("p",null,"The data types of the arrays used in this library are signed and unsigned integers and floating point numbers. More specifically, supported types are ",(0,r.kt)("inlineCode",{parentName:"p"},"I8, I16, I32, I64, U8, U16, U32, U64, F16, F32, F64")," that live in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Heavy")," namespace in C++. Note that these data types are not directly accessible in other languages from this library. When specifiying the data types in the library, These values can be used:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"C++"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Python"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Type::I8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"'i8' or 'int8'"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Type::I16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"'i16' or 'int16'"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Type::I32"),(0,r.kt)("td",{parentName:"tr",align:"center"},"'i32' or 'int32'"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Type::I64"),(0,r.kt)("td",{parentName:"tr",align:"center"},"'i64' or 'int64'"),(0,r.kt)("td",{parentName:"tr",align:"center"},"64-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Type::U8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"'u8' or 'uint8'"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8-bit unsigned integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Type::U16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"'u16' or 'uint16'"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16-bit unsigned integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Type::U32"),(0,r.kt)("td",{parentName:"tr",align:"center"},"'u32' or 'uint32'"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32-bit unsigned integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Type::U64"),(0,r.kt)("td",{parentName:"tr",align:"center"},"'u64' or 'uint64'"),(0,r.kt)("td",{parentName:"tr",align:"center"},"64-bit unsigned integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Type::F16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"'f16' or 'float16'"),(0,r.kt)("td",{parentName:"tr",align:"center"},"half precision floating-point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Type::F32"),(0,r.kt)("td",{parentName:"tr",align:"center"},"'f32' or 'float32'"),(0,r.kt)("td",{parentName:"tr",align:"center"},"single precision floating-point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Type::F64"),(0,r.kt)("td",{parentName:"tr",align:"center"},"'f64' or 'float64'"),(0,r.kt)("td",{parentName:"tr",align:"center"},"double precision floating-point")))),(0,r.kt)("h1",{id:"device"},"Device"),(0,r.kt)("p",null,"The containers of the library need to able to hold memory on different devices. These devices may include CPUs and GPUs. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Device")," type comes in handy here. ",(0,r.kt)("inlineCode",{parentName:"p"},"Device")," is made of two parts. One holds the type of the device used, and the other holds the index of the device. The index is optional and if not set, selects the first device available."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Device")," is constructed as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},"// C++\nusing namespace Heavy;\n\nDevice device(Kind::CPU); // No index needed here\n// or\nDevice device(Kind::CUDA, 0); // Index is set to zero for the first CUDA device\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"# Python\nimport heavy\n\ndevice = heavy.device('cpu') # No index needed here\n# or\ndevice = heavy.device('cuda', 0) # Index is set to zero for the first CUDA device\n")),(0,r.kt)("h1",{id:"tensor"},"Tensor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Tensor")," is a container of dense memory in this library. Please note that this container holds fully-packed arrays. This container is used to pass memory buffers to be processed by the library, and it wraps containers in other languages such as Numpy arrays or PyTorch tensors. Although the wrapping of native array containers occur automatically in the bindings of the higher level languages, you need to know how to manually convert and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tensor")," class as it will be needed in some cases."),(0,r.kt)("p",null,"There are multiple ways to construct the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tensor")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},"// C++\nusing namespace Heavy;\n\nTensor tensor; // Uninitialized tensor\n\nTensor tensor(Type::F32, {10, 10}); // 10x10 matrix of single precision floating-point values\n\nstd::vector<F32> data = {1, 2, 3};\n// Note that here, the shared_ptr doesn't own the memory buffer and if the vector goes out of scope, using tensor will result in undefined behavior.\nTensor tensor(std::shared_ptr<F32>(data.data, {}), Type::F32, {3}) // Wrapping a  C++ vector\n\nTensor tensor(Device(Kind::CUDA), Type::F32, {10, 10}) // 10x10 matrix that uses the GPU memory\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"# Python\nimport heavy\nimport numpy as np\n\ntensor = heavy.create_tensor(heavy.device('cpu'), 'f32', [10, 10]) # 10x10 matrix of single precision floating-point values\n\nnparray = np.zeros((10, 10))\n# You could use wrap_array function as it wraps the array and doesn't copy it. But using wrap_array is highly dangerous because if the original numpy array is destroyed, this leads to undefined behavior.\ntensor = heavy.to_heavy(nparray) # Copies the Numpy array and creates a Tensor object.\n")),(0,r.kt)("p",null,"The properties of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tensor")," class can be used according to the table below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"C++"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Python"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"operator bool()"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Check whether the container is valid (not empty)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"dims()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"dims"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the number of dimensions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"numel()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"numel"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the number of elements in the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"bytes()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the size of data buffer in bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"shape()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"shape"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the shape of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"shape(index)"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the shape element in index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"dtype"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the data type of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"device()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"device"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the device of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"copy()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"copy()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get a deep copy of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"to(type)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"to(type)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of the container with converted data type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"to(device)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"to(device)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of the container with converted device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"to(tensor)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"to(tensor)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Copy the container into the other")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"fill(value)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"fill(value)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Fill the container with value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"data()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"data()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the raw data pointer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"reshape(shape)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"reshape(shape)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Reshape the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"i8()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"i8()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with data type converted to 8-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"i16()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"i16()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with data type converted to 16-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"i32()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"i32()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with data type converted to 32-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"i64()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"i64()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with data type converted to 64-bit signed integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"u8()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"u8()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with data type converted to 8-bit unsigned integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"u16()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"u16()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with data type converted to 16-bit unsigned integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"u32()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"u32()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with data type converted to 32-bit unsigned integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"u64()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"u64()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with data type converted to 64-bit unsigned integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"f16()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"f16()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"eturn a copy of this container with data type converted to half precision floating point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"f32()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"f32()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with data type converted to single precision floating point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"f64()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"f64()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with data type converted to double precision floating point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"cpu()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"cpu()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with device converted to CPU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"cuda()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"cuda()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with device converted to CUDA")))),(0,r.kt)("h1",{id:"sparse"},"Sparse"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Sparse")," is a container of sparse memory. It currently supports CSR and COO formats. This container is used to pass sparse data to the algorithms to be processed and wraps similar containers in other languages such as Scipy sparse matrices. The conversion happens automatically in the interface of the library, but there will be cases that you need to work with this container directly. The library uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Format")," enumeration to indicate the format of the container."),(0,r.kt)("p",null,"There are multiple ways to construct the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sparse")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},"// C++\nusing namespace Heavy;\n\nSparse sparse(Type::F32, Type::I64, {10, 10}, Format::CSR);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"# Python\nimport heavy\nimport scipy.sparse as sp\n\nsparse = heavy.create_sparse(heavy.device('cpu'), 'f32', 'i64', [10, 10])\n")),(0,r.kt)("p",null,"The properties of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sparse")," class can be used according to the table below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"C++"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Python"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"operator bool()"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Check whether the container is valid (not empty)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"dims()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"dims"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the number of dimensions (always 2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"numel()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"numel"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the number of non-zero elements in container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"bytes()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the collective size of data buffers in bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"sparsity()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"sparsity"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the ratio of sparsity (from zero to one)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"shape()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"shape"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the shape of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"shape(index)"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the shape element in index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"dtype()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"dtype"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the data type of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"itype()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"itype"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the index type of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"format()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"format"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the format of the container (CSR, COO, ...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"device()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"device"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the device of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"copy()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"copy()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get a deep copy of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"to(dtype, itype)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"to(dtype, itype)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of the container with converted data and index type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"to(format)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"to(format)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of the container with converted format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"to(device)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"to(device)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of the tensor with converted device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"value()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get a tensor holding a reference to the value array of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"row()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"row"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get a tensor holding a reference to the row array of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"col()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"col"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get a tensor holding a reference to the column array of the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"data()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"data()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Get the raw data pointer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"csr()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"csr()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with device converted to the CSR format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"coo()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"coo()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with device converted to the COO format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"cpu()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"cpu()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with device converted to CPU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"cuda()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"cuda()"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Return a copy of this container with device converted to CUDA")))))}m.isMDXComponent=!0}}]);