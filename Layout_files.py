import os
import json

file_directories = None

directory = "Files"

get_layout =  os.listdir(directory)

def test_if_file(file):
    try:
        get_layout = os.listdir(file)
        return True
    except:
        return False
    

def build_directory_path(list):
    dir = ""
    for a in range(len(list)):
        if a < len(list)-1:
            dir = dir + list[a] + "/"
        else:
            dir = dir + list[a]
    return dir


def build_dir(prev_keys, new_key):
    dir = ""
    for a in range(len(prev_keys)):
        dir += f'{prev_keys[a]}/'
    dir += new_key
    return dir


def create_file_directories(prev_keys, dir_key, full_dir):
    global file_directories
    key_list = []
    if len(prev_keys) == 0:
        key_list.append(dir_key)
    else:
        for a in prev_keys:
            key_list.append(a)
        key_list.append(dir_key)

    files = os.listdir(full_dir)

    if len(files) == 0: # Returns None if there are no files or folders
        return 0
    else:
        temp_dir = build_dir(key_list, files[0])
        if test_if_file(temp_dir) == False: # Returns a list of Files if there are no folders
            return files
        else: # Search furthers into the sub folders
            a = {}
            for b in files:
                a[b] = create_file_directories(key_list, b, build_dir(key_list, b))
            return a
        

#create_file_directories("Test Folder")       
file_directories = create_file_directories([], directory, directory)

# Create JSON
json_data = json.dumps(file_directories)

# Save Data To Text Document
with open('data.json', 'w') as file:
    file.write(json_data)

print(file_directories)


