from PIL import Image
counter = 0
# size is width/height
img = Image.open('..//terrain.png')
for x in range(0, 16):
    for y in range(0, 16):
        box = (y*40, x*40, y*40 + 40, x*40+40)
        area = img.crop(box)

        area.save(('img' + str(counter)), 'png')
        print "image" + str(counter) + " saved"
        counter += 1
        
