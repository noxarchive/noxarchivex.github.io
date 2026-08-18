const toast=document.getElementById("toast");
function showToast(){toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)}
document.getElementById("copyLink").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText(location.href);showToast()}catch(e){alert("Link kopyalanamadı.")}
});
document.getElementById("shareBtn").addEventListener("click",async()=>{
  if(navigator.share){try{await navigator.share({title:"SOSYOPAT",text:"Kişisel profilim",url:location.href})}catch(e){}}
  else{try{await navigator.clipboard.writeText(location.href);showToast()}catch(e){alert("Paylaşım desteklenmiyor.")}}
});
document.querySelectorAll("[data-copy]").forEach(btn=>btn.addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText(btn.dataset.copy);showToast()}catch(e){}
}));
