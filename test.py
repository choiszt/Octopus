import cv2
image=cv2.imread("/nvme/liushuai/octopus.github.io/static/images/pipeline.png")
new=cv2.resize(image,(1800,1080))
cv2.imwrite('static/images/resized_pipeline.jpg', new)