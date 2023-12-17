import ast

def evaluate_fields(fields: str) -> str:
    if (len(fields) != 4):
        raise Exception("Invalid fields number")

    evaluated_fields = ""

    # Codes
    if len(fields[0]) != fields[0].count(" "):
        try:
            evaluated_codes = ast.literal_eval(fields[0])

            if isinstance(evaluated_codes, str):
                evaluated_fields += "\t\tcodes : " + str([evaluated_codes]) + ",\n"
            elif isinstance(evaluated_codes, tuple):
                evaluated_fields += "\t\tcodes : " + str([code for code in evaluated_codes]) + ",\n"
            else:
                raise
        except:
            raise Exception("Could not parse codes")
    else:
        raise Exception("Could not parse codes")

    # Names
    if len(fields[1]) != fields[1].count(" "):
        try:
            evaluated_names = ast.literal_eval(fields[1])

            if isinstance(evaluated_names, str):
                evaluated_fields += "\t\tnames : " + str([evaluated_names]) + ",\n"
            elif isinstance(evaluated_names, tuple):
                evaluated_fields += "\t\tnames : " + str([name for name in evaluated_names]) + ",\n"
            else:
                raise
        except:
            raise Exception("Could not parse names")

    # Representation
    if len(fields[2]) != fields[2].count(" "):
        try:
            evaluated_representation = ast.literal_eval(fields[2])

            if isinstance(evaluated_representation, str):
                evaluated_fields += "\t\trepresentation : " + evaluated_representation.__repr__() + ",\n"
            else:
                raise
        except:
            raise Exception("Could not parse representation")

    # Bytes
    if len(fields[3]) != fields[3].count(" "):
        try:
            evaluated_bytes = ast.literal_eval(fields[3])

            if isinstance(evaluated_bytes, int):
                evaluated_fields += "\t\tbytes : " + str(hex(evaluated_bytes)) + "\n"
            else:
                raise
        except Exception as e:
            raise Exception("Could not parse bytes")
    else:
        raise Exception("Could not parse bytes")

    return evaluated_fields


def generate_javascript(keycodes_file: str) -> str:
    keycodes_file = open(keycodes_file, 'r')

    generated_js = "const keycodes = [\n"
    for line_number, line in enumerate(keycodes_file, start=1):
        line = line.strip()
        if (not line or line[0] == '#'):
            continue

        generated_js += "\t{\n"

        try:
            generated_js += evaluate_fields(line.split(" | "))
        except Exception as e:
            print(f"Invalid line {line_number} : {e}")
            exit(-1)

        generated_js += "\t},\n"

    generated_js = generated_js[:-2]
    generated_js += "\n];\n"

    return generated_js

print(generate_javascript("./keycodes.list"))
