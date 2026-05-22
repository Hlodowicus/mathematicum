const TABS = [
    {
        id: 'addition',
        titre: 'Addition',
        operation: 'addition',
        champs: [
            { name: 'a', label: 'a', value: '2' },
            { name: 'b', label: 'b', value: '3' },
            { name: 'resultat', label: 'resultat propose', value: '5' },
        ],
    },
    {
        id: 'soustraction',
        titre: 'Soustraction',
        operation: 'soustraction',
        champs: [
            { name: 'a', label: 'a', value: '7' },
            { name: 'b', label: 'b', value: '3' },
            { name: 'resultat', label: 'resultat propose', value: '4' },
        ],
    },
    {
        id: 'multiplication',
        titre: 'Multiplication',
        operation: 'multiplication',
        champs: [
            { name: 'a', label: 'a', value: '4' },
            { name: 'b', label: 'b', value: '5' },
            { name: 'resultat', label: 'resultat propose', value: '20' },
        ],
    },
    {
        id: 'division',
        titre: 'Division',
        operation: 'division',
        champs: [
            { name: 'a', label: 'a', value: '10' },
            { name: 'b', label: 'b', value: '2' },
            { name: 'resultat', label: 'resultat propose', value: '5' },
        ],
    },
    {
        id: 'limite',
        titre: 'Limite',
        operation: 'limite',
        champs: [
            { name: 'f', label: 'f(x)', value: 'sin(x)/x' },
            { name: 'a', label: 'x tend vers', value: '0' },
        ],
    },
    {
        id: 'derivee',
        titre: 'Derivee',
        operation: 'derivee',
        champs: [
            { name: 'f', label: 'f(x)', value: 'x**3' },
            { name: 'ordre', label: 'ordre', value: '1' },
        ],
    },
    {
        id: 'integrale',
        titre: 'Integrale',
        operation: 'integrale',
        champs: [
            { name: 'f', label: 'f(x)', value: 'x**2*exp(-x)' },
        ],
    },
    {
        id: 'equation_premier_degre',
        titre: 'Equation du premier degre',
        operation: 'equation_premier_degre',
        champs: [
            { name: 'coef_a', label: 'a', value: '2' },
            { name: 'coef_b', label: 'b', value: '-6' },
        ],
    },
    {
        id: 'equation_second_degre',
        titre: 'Equation du second degre',
        description: 'Equation de la forme a*x**2 + b*x + c = d',
        operation: 'equation_second_degre',
        champs: [
            { name: 'coef_a', label: 'a', value: '1' },
            { name: 'coef_b', label: 'b', value: '-5' },
            { name: 'coef_c', label: 'c', value: '6' },
            { name: 'coef_d', label: 'd', value: '0' },
        ],
    },
    {
        id: 'inequation_premier_degre',
        titre: 'Inequation du premier degre',
        description: 'Inequation de la forme a*x + b signe d',
        operation: 'inequation_premier_degre',
        champs: [
            { name: 'coef_a', label: 'a', value: '2' },
            { name: 'coef_b', label: 'b', value: '-6' },
            { name: 'signe', label: 'signe', value: '>=', options: ['<', '<=', '>', '>='] },
            { name: 'coef_d', label: 'd', value: '0' },
        ],
    },
    {
        id: 'EDO1',
        titre: 'EDO1',
        description: "y' + ay = b avec y(x) la fonction inconnue, a(x) et b(x) deux fonctions",
        operation: 'EDO1',
        champs: [
            { name: 'coef_a', label: "a dans y' + a*y = b", value: '-1/x' },
            { name: 'coef_b', label: 'b', value: 'x*exp(5*x)' },
        ],
    },
    {
        id: 'EDO2',
        titre: 'EDO2',
        description: "ay'' + by' + cy = f(x) avec y(x) la fonction inconnue, f(x) une fonction, a b c des constantes",
        operation: 'EDO2',
        champs: [
            { name: 'coef_a', label: 'a', value: '1' },
            { name: 'coef_b', label: 'b', value: '3' },
            { name: 'coef_c', label: 'c', value: '2' },
            { name: 'f', label: 'f(x)', value: 'exp(x)' },
        ],
    },
];

const EXERCICE_OPTIONS = {
    derivee: [
        { name: 'nombre_membres', label: 'nombre de membres', value: '2', type: 'number', min: '1', max: '8' },
        { name: 'ordre', label: 'ordre de derivee', value: '1', type: 'number', min: '1', max: '4' },
        { name: 'puissance_max', label: 'puissance maximale', value: '5', type: 'number', min: '1', max: '10' },
        { name: 'coefficient_min', label: 'coefficient minimum', value: '-6', type: 'number' },
        { name: 'coefficient_max', label: 'coefficient maximum', value: '6', type: 'number' },
        { name: 'avec_polynomes', label: 'polynomes', value: 'on', type: 'checkbox' },
        { name: 'avec_sin', label: 'sin', value: '', type: 'checkbox' },
        { name: 'avec_cos', label: 'cos', value: '', type: 'checkbox' },
        { name: 'avec_exp', label: 'exp', value: '', type: 'checkbox' },
        { name: 'avec_ln', label: 'ln', value: '', type: 'checkbox' },
        { name: 'avec_racines', label: 'racines', value: '', type: 'checkbox' },
    ],
    integrale: [
        { name: 'nombre_membres', label: 'nombre de membres', value: '2', type: 'number', min: '1', max: '6' },
        { name: 'puissance_max', label: 'puissance maximale', value: '4', type: 'number', min: '1', max: '8' },
        { name: 'coefficient_min', label: 'coefficient minimum', value: '-5', type: 'number' },
        { name: 'coefficient_max', label: 'coefficient maximum', value: '5', type: 'number' },
        { name: 'avec_polynomes', label: 'polynomes', value: 'on', type: 'checkbox' },
        { name: 'avec_sin', label: 'sin', value: '', type: 'checkbox' },
        { name: 'avec_cos', label: 'cos', value: '', type: 'checkbox' },
        { name: 'avec_exp', label: 'exp', value: '', type: 'checkbox' },
        { name: 'avec_racines', label: 'racines', value: '', type: 'checkbox' },
    ],
    limite: [
        { name: 'type_limite', label: 'type', value: 'auto', options: ['auto', 'rationnelle', 'trigo', 'infini'] },
    ],
    equation_premier_degre: [
        { name: 'coefficient_min', label: 'coefficient minimum', value: '-9', type: 'number' },
        { name: 'coefficient_max', label: 'coefficient maximum', value: '9', type: 'number' },
        { name: 'solution_min', label: 'solution minimum', value: '-8', type: 'number' },
        { name: 'solution_max', label: 'solution maximum', value: '8', type: 'number' },
    ],
    equation_second_degre: [
        { name: 'coefficient_min', label: 'coefficient minimum', value: '-4', type: 'number' },
        { name: 'coefficient_max', label: 'coefficient maximum', value: '4', type: 'number' },
        { name: 'solution_min', label: 'racine minimum', value: '-6', type: 'number' },
        { name: 'solution_max', label: 'racine maximum', value: '6', type: 'number' },
    ],
    inequation_premier_degre: [
        { name: 'coefficient_min', label: 'coefficient minimum', value: '-9', type: 'number' },
        { name: 'coefficient_max', label: 'coefficient maximum', value: '9', type: 'number' },
        { name: 'signe', label: 'signe', value: 'auto', options: ['auto', '<', '<=', '>', '>='] },
    ],
    addition: [
        { name: 'minimum', label: 'minimum', value: '-30', type: 'number' },
        { name: 'maximum', label: 'maximum', value: '30', type: 'number' },
    ],
    soustraction: [
        { name: 'minimum', label: 'minimum', value: '-30', type: 'number' },
        { name: 'maximum', label: 'maximum', value: '30', type: 'number' },
    ],
    multiplication: [
        { name: 'minimum', label: 'minimum', value: '-12', type: 'number' },
        { name: 'maximum', label: 'maximum', value: '12', type: 'number' },
    ],
    division: [
        { name: 'minimum', label: 'minimum', value: '-12', type: 'number' },
        { name: 'maximum', label: 'maximum', value: '12', type: 'number' },
    ],
    EDO1: [
        { name: 'coefficient_min', label: 'coefficient minimum', value: '-5', type: 'number' },
        { name: 'coefficient_max', label: 'coefficient maximum', value: '5', type: 'number' },
        { name: 'second_membre', label: 'second membre', value: 'exp', options: ['exp', 'polynome'] },
    ],
    EDO2: [
        { name: 'coefficient_min', label: 'coefficient minimum', value: '-5', type: 'number' },
        { name: 'coefficient_max', label: 'coefficient maximum', value: '5', type: 'number' },
        { name: 'second_membre', label: 'second membre', value: 'exp', options: ['exp', 'polynome'] },
    ],
};

const PYTHON_CODE = String.raw`
import json
import random
from sympy import E, Eq, Function, Ge, Gt, I, Le, Lt, cos, diff, dsolve, exp, integrate, latex, limit
from sympy import log, oo, pi, simplify, sin, solve, solve_univariate_inequality, sqrt, symbols
from sympy.parsing.sympy_parser import convert_xor, implicit_multiplication_application
from sympy.parsing.sympy_parser import parse_expr, standard_transformations

x = symbols('x')
y = Function('y')
TRANSFORMATIONS = standard_transformations + (implicit_multiplication_application, convert_xor)
LOCAL_DICT = {
    'x': x,
    'pi': pi,
    'E': E,
    'I': I,
    'oo': oo,
    'inf': oo,
    'exp': exp,
    'ln': log,
    'log': log,
    'sin': sin,
    'cos': cos,
    'sqrt': sqrt,
}

def read_expr(value):
    if value is None or str(value).strip() == '':
        value = '0'
    return parse_expr(str(value), local_dict=LOCAL_DICT, transformations=TRANSFORMATIONS)

def format_result(result):
    text = str(result)
    if isinstance(result, str):
        return {'text': text, 'latex': text}
    if isinstance(result, bool):
        return {'text': text, 'latex': text}
    try:
        latex_result = latex(result)
    except Exception:
        latex_result = text
    return {'text': text, 'latex': latex_result}

def calculate(operation, params):
    if operation == 'derivee':
        f = read_expr(params.get('f'))
        ordre = int(params.get('ordre', 1))
        return diff(f, x, ordre)

    if operation == 'integrale':
        return integrate(read_expr(params.get('f')), x)

    if operation == 'limite':
        return limit(read_expr(params.get('f')), x, read_expr(params.get('a')))

    if operation == 'equation_premier_degre':
        a = read_expr(params.get('coef_a'))
        b = read_expr(params.get('coef_b'))
        return solve(Eq(a * x + b, 0), x)

    if operation == 'equation_second_degre':
        a = read_expr(params.get('coef_a'))
        b = read_expr(params.get('coef_b'))
        c = read_expr(params.get('coef_c'))
        d = read_expr(params.get('coef_d'))
        return solve(Eq(a * x**2 + b * x + c, d), x)

    if operation == 'inequation_premier_degre':
        a = read_expr(params.get('coef_a'))
        b = read_expr(params.get('coef_b'))
        signe = params.get('signe')
        d = read_expr(params.get('coef_d'))
        membres = {
            '<': Lt(a * x + b, d),
            '<=': Le(a * x + b, d),
            '>': Gt(a * x + b, d),
            '>=': Ge(a * x + b, d),
        }
        return solve_univariate_inequality(membres[signe], x)

    if operation == 'addition':
        return simplify(read_expr(params.get('a')) + read_expr(params.get('b')) - read_expr(params.get('resultat'))) == 0

    if operation == 'soustraction':
        return simplify(read_expr(params.get('a')) - read_expr(params.get('b')) - read_expr(params.get('resultat'))) == 0

    if operation == 'multiplication':
        return simplify(read_expr(params.get('a')) * read_expr(params.get('b')) - read_expr(params.get('resultat'))) == 0

    if operation == 'division':
        b = read_expr(params.get('b'))
        if b == 0:
            return False
        return simplify(read_expr(params.get('a')) / b - read_expr(params.get('resultat'))) == 0

    if operation == 'EDO1':
        a = read_expr(params.get('coef_a'))
        b = read_expr(params.get('coef_b'))
        return dsolve(Eq(y(x).diff(x) + a * y(x), b))

    if operation == 'EDO2':
        a = read_expr(params.get('coef_a'))
        b = read_expr(params.get('coef_b'))
        c = read_expr(params.get('coef_c'))
        f = read_expr(params.get('f'))
        return dsolve(Eq(a * y(x).diff(x, 2) + b * y(x).diff(x) + c * y(x), f))

    raise ValueError('Operation inconnue')

def option_int(options, name, default, minimum=None, maximum=None):
    try:
        value = int(options.get(name, default))
    except Exception:
        value = default
    if minimum is not None:
        value = max(minimum, value)
    if maximum is not None:
        value = min(maximum, value)
    return value

def bounds(options, min_name='minimum', max_name='maximum', default_min=-10, default_max=10):
    minimum = option_int(options, min_name, default_min)
    maximum = option_int(options, max_name, default_max)
    if minimum > maximum:
        minimum, maximum = maximum, minimum
    return minimum, maximum

def integer(minimum=-10, maximum=10, no_zero=False):
    if minimum > maximum:
        minimum, maximum = maximum, minimum
    if no_zero and minimum == 0 and maximum == 0:
        return 1
    value = random.randint(minimum, maximum)
    while no_zero and value == 0:
        value = random.randint(minimum, maximum)
    return value

def coefficient_bounds(options, default_min=-6, default_max=6):
    return bounds(options, 'coefficient_min', 'coefficient_max', default_min, default_max)

def function_families(options, with_ln=False):
    families = []
    if options.get('avec_polynomes', True):
        families.append('polynome')
    if options.get('avec_sin', False):
        families.append('sin')
    if options.get('avec_cos', False):
        families.append('cos')
    if options.get('avec_exp', False):
        families.append('exp')
    if with_ln and options.get('avec_ln', False):
        families.append('ln')
    if options.get('avec_racines', False):
        families.append('racine')
    return families or ['polynome']

def function_term(family, coefficient_min, coefficient_max, power_max):
    coefficient = integer(coefficient_min, coefficient_max, no_zero=True)
    k = integer(1, 3, no_zero=True)
    offset = integer(1, 5)
    if family == 'sin':
        return coefficient * sin(k * x)
    if family == 'cos':
        return coefficient * cos(k * x)
    if family == 'exp':
        return coefficient * exp(k * x)
    if family == 'ln':
        return coefficient * log(x + offset)
    if family == 'racine':
        return coefficient * sqrt(x + offset)
    return coefficient * x**integer(1, power_max)

def function_expression(options, max_members=8, with_ln=False):
    member_count = option_int(options, 'nombre_membres', 2, 1, max_members)
    power_max = option_int(options, 'puissance_max', 5, 1, 12)
    coefficient_min, coefficient_max = coefficient_bounds(options)
    families = function_families(options, with_ln=with_ln)
    expression = 0
    for _ in range(member_count):
        expression += function_term(random.choice(families), coefficient_min, coefficient_max, power_max)
    return expression

def exercise_derivative(options):
    f = function_expression(options, max_members=8, with_ln=True)
    order = option_int(options, 'ordre', 1, 1, 4)
    return f"Calculer ({f})" + "'" * order, [f, order]

def exercise_integral(options):
    f = function_expression(options, max_members=6)
    return f"Calculer une primitive de f(x) = {f}", [f]

def exercise_limit(options):
    limit_type = options.get('type_limite', 'auto')
    exercises = {
        'rationnelle': [(sin(x) / x, 0), ((x**2 - 1) / (x - 1), 1), ((x**2 - 4) / (x - 2), 2)],
        'trigo': [(sin(x) / x, 0), ((1 - cos(x)) / x**2, 0), (sin(2 * x) / x, 0)],
        'infini': [((3 * x**2 + 1) / (x**2 - 2), oo), ((2 * x + 1) / (x - 5), oo), (exp(-x), oo)],
    }
    if limit_type == 'auto':
        limit_type = random.choice(list(exercises.keys()))
    if limit_type not in exercises:
        limit_type = 'rationnelle'
    f, a = random.choice(exercises[limit_type])
    return f"Calculer la limite de f(x) = {f} quand x tend vers {a}", [f, a]

def exercise_linear_equation(options):
    coefficient_min, coefficient_max = coefficient_bounds(options, -9, 9)
    solution_min, solution_max = bounds(options, 'solution_min', 'solution_max', -8, 8)
    a = integer(coefficient_min, coefficient_max, no_zero=True)
    solution = integer(solution_min, solution_max)
    b = -a * solution
    return f"Resoudre l'equation {a}*x + {b} = 0", [a, b]

def exercise_quadratic_equation(options):
    coefficient_min, coefficient_max = coefficient_bounds(options, -4, 4)
    solution_min, solution_max = bounds(options, 'solution_min', 'solution_max', -6, 6)
    root_1 = integer(solution_min, solution_max)
    root_2 = integer(solution_min, solution_max)
    a = integer(coefficient_min, coefficient_max, no_zero=True)
    b = -a * (root_1 + root_2)
    d = integer(-8, 8)
    c = a * root_1 * root_2 + d
    return f"Resoudre l'equation {a}*x**2 + {b}*x + {c} = {d}", [a, b, c, d]

def exercise_linear_inequality(options):
    coefficient_min, coefficient_max = coefficient_bounds(options, -9, 9)
    sign = options.get('signe', 'auto')
    if sign == 'auto':
        sign = random.choice(['<', '<=', '>', '>='])
    a = integer(coefficient_min, coefficient_max, no_zero=True)
    b = integer(-12, 12)
    d = integer(-12, 12)
    return f"Resoudre l'inequation {a}*x + {b} {sign} {d}", [a, b, sign, d]

def exercise_arithmetic(operation, options):
    default_max = 12 if operation in ['multiplication', 'division'] else 30
    minimum, maximum = bounds(options, default_min=-default_max, default_max=default_max)
    if operation == 'addition':
        a, b = integer(minimum, maximum), integer(minimum, maximum)
        return f"Verifier l'addition {a} + {b} = {a + b}", [a, b, a + b]
    if operation == 'soustraction':
        a, b = integer(minimum, maximum), integer(minimum, maximum)
        return f"Verifier la soustraction {a} - {b} = {a - b}", [a, b, a - b]
    if operation == 'multiplication':
        a, b = integer(minimum, maximum), integer(minimum, maximum)
        return f"Verifier la multiplication {a} * {b} = {a * b}", [a, b, a * b]
    b = integer(minimum, maximum, no_zero=True)
    result = integer(minimum, maximum)
    a = b * result
    return f"Verifier la division {a} / {b} = {result}", [a, b, result]

def exercise_edo1(options):
    coefficient_min, coefficient_max = coefficient_bounds(options, -5, 5)
    a = integer(coefficient_min, coefficient_max, no_zero=True)
    if options.get('second_membre') == 'polynome':
        b = integer(coefficient_min, coefficient_max, no_zero=True) * x**integer(1, 3)
    else:
        b = integer(coefficient_min, coefficient_max, no_zero=True) * exp(x)
    return f"Resoudre l'EDO y' + ({a})*y = {b}", [a, b]

def exercise_edo2(options):
    coefficient_min, coefficient_max = coefficient_bounds(options, -5, 5)
    a = integer(1, max(1, abs(coefficient_max)), no_zero=True)
    b = integer(coefficient_min, coefficient_max)
    c = integer(coefficient_min, coefficient_max)
    if options.get('second_membre') == 'polynome':
        f = integer(coefficient_min, coefficient_max, no_zero=True) * x**integer(1, 3)
    else:
        f = integer(coefficient_min, coefficient_max, no_zero=True) * exp(x)
    return f"Resoudre l'EDO {a}*y'' + {b}*y' + {c}*y = {f}", [a, b, c, f]

def latex_exercise(operation, params):
    if operation == 'derivee':
        f, order = params
        apostrophes = "'" * int(order)
        return f"\\text{{Calculer }} \\left({latex(f)}\\right)^{{{apostrophes}}}"
    if operation == 'integrale':
        return f"\\text{{Calculer }} \\int {latex(params[0])}\\,dx"
    if operation == 'limite':
        f, a = params
        return f"\\text{{Calculer }} \\lim_{{x \\to {latex(a)}}} {latex(f)}"
    if operation == 'equation_premier_degre':
        a, b = params
        return f"\\text{{Resoudre }} {latex(a)}x + {latex(b)} = 0"
    if operation == 'equation_second_degre':
        a, b, c, d = params
        return f"\\text{{Resoudre }} {latex(a)}x^2 + {latex(b)}x + {latex(c)} = {latex(d)}"
    if operation == 'inequation_premier_degre':
        a, b, sign, d = params
        signs = {'<': '<', '<=': '\\le', '>': '>', '>=': '\\ge'}
        return f"\\text{{Resoudre }} {latex(a)}x + {latex(b)} {signs[sign]} {latex(d)}"
    if operation == 'addition':
        a, b, result = params
        return f"\\text{{Verifier }} {latex(a)} + {latex(b)} = {latex(result)}"
    if operation == 'soustraction':
        a, b, result = params
        return f"\\text{{Verifier }} {latex(a)} - {latex(b)} = {latex(result)}"
    if operation == 'multiplication':
        a, b, result = params
        return f"\\text{{Verifier }} {latex(a)} \\times {latex(b)} = {latex(result)}"
    if operation == 'division':
        a, b, result = params
        return f"\\text{{Verifier }} \\frac{{{latex(a)}}}{{{latex(b)}}} = {latex(result)}"
    if operation == 'EDO1':
        a, b = params
        return f"\\text{{Resoudre }} y' + \\left({latex(a)}\\right)y = {latex(b)}"
    if operation == 'EDO2':
        a, b, c, f = params
        return f"\\text{{Resoudre }} {latex(a)}y'' + {latex(b)}y' + {latex(c)}y = {latex(f)}"
    return latex(params)

def stringify_params(params):
    return [str(param) for param in params]

def generate_exercise(operation, options):
    if operation == 'derivee':
        problem, params = exercise_derivative(options)
    elif operation == 'integrale':
        problem, params = exercise_integral(options)
    elif operation == 'limite':
        problem, params = exercise_limit(options)
    elif operation == 'equation_premier_degre':
        problem, params = exercise_linear_equation(options)
    elif operation == 'equation_second_degre':
        problem, params = exercise_quadratic_equation(options)
    elif operation == 'inequation_premier_degre':
        problem, params = exercise_linear_inequality(options)
    elif operation in ['addition', 'soustraction', 'multiplication', 'division']:
        problem, params = exercise_arithmetic(operation, options)
    elif operation == 'EDO1':
        problem, params = exercise_edo1(options)
    elif operation == 'EDO2':
        problem, params = exercise_edo2(options)
    else:
        raise ValueError('Operation inconnue')
    return {
        'problem': problem,
        'latex': latex_exercise(operation, params),
        'params': stringify_params(params),
        'correction': None,
    }

def read_exercise_params(operation, params):
    if operation == 'derivee':
        return [read_expr(params[0]), int(params[1])]
    if operation == 'inequation_premier_degre':
        return [read_expr(params[0]), read_expr(params[1]), params[2], read_expr(params[3])]
    return [read_expr(param) for param in params]

def calculate_from_json(payload_json):
    payload = json.loads(payload_json)
    try:
        result = calculate(payload['operation'], payload.get('params', {}))
        return json.dumps(format_result(result))
    except Exception as error:
        return json.dumps(format_result(f"Erreur : {error}"))

def generate_from_json(payload_json):
    payload = json.loads(payload_json)
    try:
        return json.dumps(generate_exercise(payload['operation'], payload.get('options', {})))
    except Exception as error:
        return json.dumps({
            'problem': f"Erreur : {error}",
            'latex': f"\\text{{Erreur : {error}}}",
            'params': [],
            'correction': None,
        })

def correct_from_json(payload_json):
    payload = json.loads(payload_json)
    operation = payload['operation']
    params_text = payload.get('params', [])
    try:
        params = read_exercise_params(operation, params_text)
        result = calculate(operation, dict(zip([], []))) if False else None
        if operation == 'derivee':
            result = diff(params[0], x, params[1])
        elif operation == 'integrale':
            result = integrate(params[0], x)
        elif operation == 'limite':
            result = limit(params[0], x, params[1])
        elif operation == 'equation_premier_degre':
            result = solve(Eq(params[0] * x + params[1], 0), x)
        elif operation == 'equation_second_degre':
            result = solve(Eq(params[0] * x**2 + params[1] * x + params[2], params[3]), x)
        elif operation == 'inequation_premier_degre':
            result = calculate(operation, {'coef_a': params_text[0], 'coef_b': params_text[1], 'signe': params_text[2], 'coef_d': params_text[3]})
        elif operation == 'addition':
            result = simplify(params[0] + params[1] - params[2]) == 0
        elif operation == 'soustraction':
            result = simplify(params[0] - params[1] - params[2]) == 0
        elif operation == 'multiplication':
            result = simplify(params[0] * params[1] - params[2]) == 0
        elif operation == 'division':
            result = False if params[1] == 0 else simplify(params[0] / params[1] - params[2]) == 0
        elif operation == 'EDO1':
            result = dsolve(Eq(y(x).diff(x) + params[0] * y(x), params[1]))
        elif operation == 'EDO2':
            result = dsolve(Eq(params[0] * y(x).diff(x, 2) + params[1] * y(x).diff(x) + params[2] * y(x), params[3]))
        else:
            raise ValueError('Operation inconnue')
        return json.dumps({
            'problem': payload.get('problem', ''),
            'latex': latex_exercise(operation, params),
            'params': params_text,
            'correction': format_result(result),
        })
    except Exception as error:
        return json.dumps({
            'problem': payload.get('problem', ''),
            'latex': f"\\text{{Erreur : {error}}}",
            'params': params_text,
            'correction': format_result(f"Erreur : {error}"),
        })
`;

const SITE_PASSWORD = 'maths';
const ACCESS_KEY = 'verificator_static_access';
let pyodide = null;
let engineReady = false;
const currentExercises = new Map();

document.addEventListener('DOMContentLoaded', () => {
    initPasswordProtection();
    renderInterface();
    bindGrandTabs();

    if (hasAccess()) {
        unlockSite();
        initEngine();
    }
});

function initPasswordProtection() {
    document.body.classList.toggle('locked', !hasAccess());

    const form = document.getElementById('password-form');
    const input = document.getElementById('password-input');
    const error = document.getElementById('password-error');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (input.value === SITE_PASSWORD) {
            sessionStorage.setItem(ACCESS_KEY, 'true');
            error.textContent = '';
            unlockSite();
            initEngine();
            return;
        }

        input.value = '';
        input.focus();
        error.textContent = 'Mot de passe incorrect.';
    });
}

function hasAccess() {
    return sessionStorage.getItem(ACCESS_KEY) === 'true';
}

function unlockSite() {
    document.body.classList.remove('locked');
}

function renderInterface() {
    renderTabs('verification');
    renderTabs('exercices');
    setFormsEnabled(false);
}

function renderTabs(kind) {
    const tabsContainer = document.getElementById(kind === 'verification' ? 'verification-tabs' : 'exercise-tabs');
    const panelsContainer = document.getElementById(kind === 'verification' ? 'verification-panels' : 'exercise-panels');

    tabsContainer.innerHTML = '';
    panelsContainer.innerHTML = '';

    TABS.forEach((tab, index) => {
        const button = document.createElement('button');
        button.className = `tab-button ${index === 0 ? 'active' : ''}`;
        button.type = 'button';
        button.textContent = tab.titre;
        button.dataset.panel = `${kind}-${tab.id}`;
        button.addEventListener('click', () => activatePanel(kind, tab.id));
        tabsContainer.appendChild(button);

        panelsContainer.appendChild(kind === 'verification' ? createVerificationPanel(tab, index === 0) : createExercisePanel(tab, index === 0));
    });
}

function createVerificationPanel(tab, active) {
    const panel = createPanel(`verification-${tab.id}`, tab, active);
    const form = document.createElement('form');
    form.dataset.operation = tab.operation;

    const params = document.createElement('div');
    params.className = 'parametres-verification';
    params.appendChild(createFieldsRow(tab.champs));
    form.appendChild(params);

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Calculer';
    form.appendChild(submit);

    const resultContainer = document.createElement('div');
    resultContainer.className = 'resultats';

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!engineReady) return setStatus('Le moteur de calcul charge encore.', 'error');
        setBusy(form, true);
        const result = await callPython('calculate_from_json', {
            operation: tab.operation,
            params: readForm(form),
        });
        resultContainer.replaceChildren(createResultCard(result));
        rerenderMath();
        setBusy(form, false);
    });

    panel.querySelector('.contenu-onglet').append(form, resultContainer);
    return panel;
}

function createExercisePanel(tab, active) {
    const panel = createPanel(`exercices-${tab.id}`, tab, active);
    const form = document.createElement('form');
    form.dataset.operation = tab.operation;

    const options = EXERCICE_OPTIONS[tab.operation] || [];
    if (options.length > 0) {
        const wrapper = document.createElement('div');
        wrapper.className = 'options-exercice';
        wrapper.append(createFieldsRow(options.filter((option) => option.type !== 'checkbox')));
        wrapper.append(createTogglesRow(options.filter((option) => option.type === 'checkbox')));
        form.appendChild(wrapper);
    }

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Generer un exercice';
    form.appendChild(submit);

    const resultContainer = document.createElement('div');
    resultContainer.className = 'resultats';

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!engineReady) return setStatus('Le moteur de calcul charge encore.', 'error');
        setBusy(form, true);
        const exercise = await callPython('generate_from_json', {
            operation: tab.operation,
            options: readForm(form),
        });
        currentExercises.set(tab.operation, exercise);
        resultContainer.replaceChildren(createExerciseCard(tab.operation, exercise));
        rerenderMath();
        setBusy(form, false);
    });

    panel.querySelector('.contenu-onglet').append(form, resultContainer);
    return panel;
}

function createPanel(id, tab, active) {
    const panel = document.createElement('section');
    panel.className = `panel ${active ? 'active' : ''}`;
    panel.id = id;

    const title = document.createElement('h2');
    title.textContent = tab.titre;
    panel.appendChild(title);

    if (tab.description) {
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = tab.description;
        panel.appendChild(description);
    }

    const content = document.createElement('div');
    content.className = 'contenu-onglet';
    panel.appendChild(content);

    return panel;
}

function createFieldsRow(fields) {
    const row = document.createElement('div');
    row.className = 'options-ligne';

    fields.forEach((field) => {
        const label = document.createElement('label');
        label.textContent = field.label;

        if (field.options) {
            const select = document.createElement('select');
            select.name = field.name;
            field.options.forEach((option) => {
                const choice = document.createElement('option');
                choice.value = option;
                choice.textContent = option;
                choice.selected = option === field.value;
                select.appendChild(choice);
            });
            label.appendChild(select);
        } else {
            const input = document.createElement('input');
            input.name = field.name;
            input.type = field.type || 'text';
            input.value = field.value;
            if (field.min) input.min = field.min;
            if (field.max) input.max = field.max;
            input.required = true;
            label.appendChild(input);
        }

        row.appendChild(label);
    });

    return row;
}

function createTogglesRow(fields) {
    const row = document.createElement('div');
    row.className = 'toggles-ligne';

    fields.forEach((field) => {
        const label = document.createElement('label');
        label.className = 'toggle';

        const input = document.createElement('input');
        input.name = field.name;
        input.type = 'checkbox';
        input.checked = field.value === 'on';

        const text = document.createElement('span');
        text.textContent = field.label;

        label.append(input, text);
        row.appendChild(label);
    });

    return row;
}

function createResultCard(result) {
    const card = document.createElement('div');
    card.className = 'resultat';

    const latex = document.createElement('div');
    latex.className = 'latex-rendu';
    latex.textContent = `\\( ${result.latex} \\)`;

    const text = document.createElement('p');
    text.className = 'texte-resultat';
    text.textContent = result.text;

    const copyRow = document.createElement('div');
    copyRow.className = 'boutons-copie';
    copyRow.append(createCopyButton('Copier version python', result.text));
    copyRow.append(createCopyButton('Copier version latex', result.latex));

    card.append(latex, text, copyRow);
    return card;
}

function createExerciseCard(operation, exercise) {
    const card = document.createElement('div');
    card.className = 'resultat';

    const latex = document.createElement('div');
    latex.className = 'latex-rendu';
    latex.textContent = `\\( ${exercise.latex} \\)`;

    const button = document.createElement('button');
    button.className = 'primary-button';
    button.type = 'button';
    button.textContent = 'Generer la correction';

    const correction = document.createElement('div');
    correction.className = 'correction';

    button.addEventListener('click', async () => {
        if (!engineReady) return setStatus('Le moteur de calcul charge encore.', 'error');
        button.disabled = true;
        const corrected = await callPython('correct_from_json', {
            operation,
            params: exercise.params,
            problem: exercise.problem,
        });
        currentExercises.set(operation, corrected);
        correction.replaceChildren(createResultCard(corrected.correction));
        rerenderMath();
        button.disabled = false;
    });

    card.append(latex, button, correction);
    return card;
}

function createCopyButton(label, value) {
    const button = document.createElement('button');
    button.className = 'bouton-copie';
    button.type = 'button';
    button.textContent = label;
    button.addEventListener('click', async () => {
        const initial = button.textContent;
        await navigator.clipboard.writeText(value);
        button.textContent = 'Copie';
        setTimeout(() => {
            button.textContent = initial;
        }, 1200);
    });
    return button;
}

function activatePanel(kind, tabId) {
    const section = document.getElementById(kind === 'verification' ? 'grand-verification' : 'grand-exercices');
    section.querySelectorAll('.tab-button').forEach((button) => {
        button.classList.toggle('active', button.dataset.panel === `${kind}-${tabId}`);
    });
    section.querySelectorAll('.panel').forEach((panel) => {
        panel.classList.toggle('active', panel.id === `${kind}-${tabId}`);
    });
    rerenderMath();
}

function bindGrandTabs() {
    const buttons = document.querySelectorAll('.grand-tab-button');
    const sections = document.querySelectorAll('.grand-section');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttons.forEach((item) => item.classList.remove('active'));
            sections.forEach((item) => item.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(`grand-${button.dataset.grand}`).classList.add('active');
            rerenderMath();
        });
    });
}

function readForm(form) {
    const values = {};
    form.querySelectorAll('input, select').forEach((field) => {
        if (field.type === 'checkbox') {
            values[field.name] = field.checked;
        } else {
            values[field.name] = field.value;
        }
    });
    return values;
}

function setBusy(form, busy) {
    form.querySelectorAll('button, input, select').forEach((element) => {
        element.disabled = busy;
    });
}

function setFormsEnabled(enabled) {
    document.querySelectorAll('main form button, main form input, main form select').forEach((element) => {
        element.disabled = !enabled;
    });
}

function setStatus(message, type = '') {
    const status = document.getElementById('engine-status');
    status.className = type;
    status.textContent = message;
}

async function initEngine() {
    try {
        setStatus('Chargement de Pyodide...');
        pyodide = await loadPyodide();
        setStatus('Chargement de Sympy...');
        await pyodide.loadPackage('sympy');
        pyodide.runPython(PYTHON_CODE);
        engineReady = true;
        setFormsEnabled(true);
        setStatus('Moteur de calcul pret.', 'ready');
    } catch (error) {
        setStatus(`Impossible de charger le moteur de calcul : ${error.message}`, 'error');
    }
}

async function callPython(functionName, payload) {
    pyodide.globals.set('payload_json', JSON.stringify(payload));
    const raw = pyodide.runPython(`${functionName}(payload_json)`);
    return JSON.parse(raw);
}

function rerenderMath() {
    if (window.MathJax && window.MathJax.typesetClear) {
        window.MathJax.typesetClear();
    }
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
    }
}
