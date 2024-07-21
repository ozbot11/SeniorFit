import os
from PIL import Image
from torch.utils.data import Dataset
import torchvision.transforms as transforms

classes = {
    "NORMAL": 0,
    "DRUSEN": 1,
    "CNV": 2,
    "DME": 3
}